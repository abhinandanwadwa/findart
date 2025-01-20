import React from 'react';

const ScriptDisplay = ({ script }) => {
  // If script is null or undefined, return null
  if (!script) return null;

  // Log the script data to debug
  console.log('Script data:', script);
  console.log('Script content type:', Array.isArray(script.content) ? 'array' : typeof script.content);

  // Ensure script.content is an array
  const scriptContent = Array.isArray(script.content) ? script.content : [];
  const scriptStyles = Array.isArray(script.styles) ? script.styles : [];

  return (
    <section className="w-full">
      <div className="px-6 py-8 bg-white rounded-lg border border-neutral-200">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">AI Script Overview</h2>
          <p className="text-neutral-600">Video concept and storyboard details</p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">{script.title || 'Untitled Script'}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {scriptStyles.map((style, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                >
                  {style}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Storyboard</h4>
            <div className="space-y-4">
              {scriptContent.map((scene, index) => (
                <div key={index} className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-neutral-200 rounded-full text-sm font-medium">
                      {index + 1}
                    </span>
                    <p className="text-neutral-700">{scene}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptDisplay;