'use client';

import { useEffect, useRef, useState } from 'react';

interface ARCameraBackgroundProps {
  isActive: boolean;
  onCameraReady?: () => void;
  onCameraError?: (error: Error) => void;
}

export default function ARCameraBackground({
  isActive,
  onCameraReady,
  onCameraError,
}: ARCameraBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isActive) {
      // Stop camera when AR mode is disabled
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
      setIsCameraActive(false);
      return;
    }

    // Request camera access when AR mode is enabled
    const startCamera = async () => {
      try {
        // Request rear camera with high resolution
        const constraints: MediaStreamConstraints = {
          video: {
            facingMode: 'environment', // Use rear camera on mobile
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          },
          audio: false,
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsCameraActive(true);
          onCameraReady?.();
        }
      } catch (err) {
        const error = err as Error;
        console.error('Error accessing camera:', error);
        setError(error.message);
        onCameraError?.(error);

        // Fallback: try with default constraints if rear camera fails
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          streamRef.current = stream;

          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
            setIsCameraActive(true);
            onCameraReady?.();
          }
        } catch (fallbackErr) {
          const fallbackError = fallbackErr as Error;
          console.error('Fallback camera access failed:', fallbackError);
          setError(fallbackError.message);
          onCameraError?.(fallbackError);
        }
      }
    };

    startCamera();

    // Cleanup function
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, [isActive, onCameraReady, onCameraError]);

  if (!isActive) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0">
      {/* Camera Video Background */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        playsInline
        muted
      />

      {/* Loading Overlay */}
      {!isCameraActive && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="text-center">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent mx-auto"></div>
            <p className="text-white">Accessing camera...</p>
          </div>
        </div>
      )}

      {/* Error Overlay */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-900 bg-opacity-75">
          <div className="max-w-md rounded-lg bg-white p-6 text-center shadow-xl">
            <div className="mb-4 text-6xl">📷</div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">Camera Access Required</h3>
            <p className="mb-4 text-sm text-gray-600">
              {error.includes('Permission denied')
                ? 'Camera permission was denied. Please allow camera access in your browser settings to use AR mode.'
                : `Unable to access camera: ${error}`}
            </p>
            <p className="text-xs text-gray-500">
              Make sure your device has a camera and you've granted permission to this website.
            </p>
          </div>
        </div>
      )}

      {/* AR Instructions Overlay */}
      {isCameraActive && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
          <div className="rounded-full bg-black bg-opacity-60 px-6 py-3 text-white shadow-lg backdrop-blur-sm">
            <p className="text-sm">📱 Move your device to place the furniture</p>
          </div>
        </div>
      )}
    </div>
  );
}
