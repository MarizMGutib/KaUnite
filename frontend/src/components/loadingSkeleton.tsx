// components/LoadingSkeleton.js
export default function LoadingSkeleton() {
    return (
      <div className="animate-pulse space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 rounded bg-gray-300"></div>
            <div className="h-4 rounded bg-gray-300"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 rounded bg-gray-300"></div>
          <div className="h-4 rounded bg-gray-300"></div>
        </div>
      </div>
    );
  }
  