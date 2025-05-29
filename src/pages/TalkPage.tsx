import React, { useState } from 'react';
import { Mic, StopCircle, Play, Download, Share2, History } from 'lucide-react';

const TalkPage: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFiles, setAudioFiles] = useState([
    {
      id: 1,
      name: 'Voice Message 1',
      duration: '0:45',
      date: '05/29/2025 10:24',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Voice Message 2',
      duration: '1:30',
      date: '05/29/2025 10:25',
      status: 'completed'
    }
  ]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">AI Talk</h1>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <History size={20} />
        </button>
      </div>

      {/* Recording Interface */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col items-center">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-4 ${
            isRecording 
              ? 'bg-red-100 animate-pulse' 
              : 'bg-gray-100'
          }`}>
            <button
              onClick={toggleRecording}
              className={`p-8 rounded-full ${
                isRecording 
                  ? 'text-red-600 hover:text-red-700' 
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              {isRecording ? <StopCircle size={40} /> : <Mic size={40} />}
            </button>
          </div>
          <p className="text-gray-600 mb-2">
            {isRecording ? 'Recording...' : 'Click to start recording'}
          </p>
          {isRecording && (
            <div className="flex items-center text-red-600">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></span>
              00:00
            </div>
          )}
        </div>
      </div>

      {/* Audio Files List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Recent Recordings</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {audioFiles.map((file) => (
            <div key={file.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Play size={20} className="text-gray-400 mr-3" />
                  <div>
                    <h3 className="font-medium">{file.name}</h3>
                    <p className="text-sm text-gray-500">{file.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{file.duration}</span>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Download size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalkPage;