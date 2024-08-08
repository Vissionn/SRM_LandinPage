// src/components/TallyForm.js
import React, { useEffect } from 'react';

const TallyForm = () => {
    useEffect(() => {
        const loadTallyScript = () => {
            const script = document.createElement('script');
            script.src = 'https://tally.so/widgets/embed.js';
            script.async = true;

            script.onload = () => {
                  // The Tally script will automatically find and initialize the iframe.
               
            };

            script.onerror = (error) => {
                console.error('Failed to load Tally script', error);
            };

            // Append script to document body
            document.body.appendChild(script);

        
        };

        loadTallyScript();

        // Cleanup script from document body when component unmounts
        return () => {
            const scripts = document.querySelectorAll('script[src="https://tally.so/widgets/embed.js"]');
            scripts.forEach(script => script.remove());
        };
    }, []);


  return (
    <div className="md:w-[80%] lg:w-[30%] h-[50%] mx-auto  px-3 py-6 " >
      <h1 className='  text-4xl font-inter font-semibold ml-2'>Get in Touch Now</h1>
    <iframe data-tally-src="https://tally.so/embed/w52W0E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" 
    width="100%"
     height="100%" 
     title="Contact form">   
     </iframe>

   
    </div>
  );
};

export default TallyForm;