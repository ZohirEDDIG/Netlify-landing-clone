import { type PrimitiveName  } from '../data';

const AIGatewayCode = () => {
    return (
        <code className='px-4 py-2 block overflow-x-auto'>
            
            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">import</span>
                <span className="text-[#E4F0FB]">&nbsp;OpenAI</span>
                <span className="text-[#89DDFF]">&nbsp;from</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">openai</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">export</span>
                <span className="text-[#89DDFF]">&nbsp;default</span>
                <span className="text-[#C792EA]">&nbsp;async</span>
                <span className="text-[#89DDFF]">&nbsp;(</span>
                <span className="text-[#5DE4C7]">req</span>
                <span className="text-[#C792EA]">:</span>
                <span className="text-[#7FDBCA]">&nbsp;Request</span>
                <span className="text-[#89DDFF]">)</span>
                <span className="text-[#C792EA]">&nbsp;=&gt;</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;if</span>
                <span className="text-[#E4F0FB]">&nbsp;(req</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#E4F0FB]">method</span>
                <span className="text-[#C792EA]">&nbsp;!==</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">POST</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;return</span>
                <span className="text-[#C792EA]">&nbsp;new</span>
                <span className="text-[#5FB3FF]">&nbsp;Response</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#ADD7FF]">Method not allowed</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;status</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#5DE4C7]">&nbsp;405</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&#125;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;try</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#C792EA]">&nbsp;&nbsp;&nbsp;&nbsp;const</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;description </span>
                <span className="text-[#89DDFF]">&#125;</span>
                <span className="text-[#C792EA]">&nbsp;=</span>
                <span className="text-[#89DDFF]">&nbsp;await</span>
                <span className="text-[#E4F0FB]">&nbsp;req</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#5FB3FF]">json</span>
                <span className="text-[#E4F0FB]">()</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;if</span>
                <span className="text-[#E4F0FB]">&nbsp;(</span>
                <span className="text-[#C792EA]">!</span>
                <span className="text-[#E4F0FB]">description)</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return</span>
                <span className="text-[#C792EA]">&nbsp;new</span>
                <span className="text-[#5FB3FF]">&nbsp;Response</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#ADD7FF]">Missing description</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;status</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#5DE4C7]">&nbsp;400</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className="text-[#C792EA]">&nbsp;&nbsp;&nbsp;&nbsp;const</span>
                <span className="text-[#E4F0FB]">&nbsp;client</span>
                <span className="text-[#C792EA]">&nbsp;=</span>
                <span className="text-[#C792EA]">&nbsp;new</span>
                <span className="text-[#5FB3FF]">&nbsp;OpenAI</span>
                <span className="text-[#E4F0FB]">()</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#C792EA]">&nbsp;&nbsp;&nbsp;&nbsp;const</span>
                <span className="text-[#E4F0FB]">&nbsp;res</span>
                <span className="text-[#C792EA]">&nbsp;=</span>
                <span className="text-[#89DDFF]">&nbsp;await</span>
                <span className="text-[#E4F0FB]">&nbsp;client</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#E4F0FB]">responses</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#5FB3FF]">create</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&#123;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#E4F0FB]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">gpt-5-mini</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#E4F0FB]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;input</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#E4F0FB]">&nbsp;[</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;role</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#ADD7FF]">user</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#E4F0FB]"> content</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]"> `</span>
                <span className="text-[#ADD7FF]">Write concise alt text for: </span>
                <span className="text-[#89DDFF]">$&#123;</span>
                <span className="text-[#E4F0FB]">description</span>
                <span className="text-[#89DDFF]">&#125;`</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;,</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#E4F0FB]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span>
                <span className="text-[#89DDFF]">,</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;return</span>
                <span className="text-[#E4F0FB]">&nbsp;Response</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#5FB3FF]">json</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;altText</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#E4F0FB]">&nbsp;res</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#E4F0FB]">output_text</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>
            
            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&#125;</span>
                <span className="text-[#89DDFF]">&nbsp;catch</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div>
            
            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;return</span>
                <span className="text-[#C792EA]">&nbsp;new</span>
                <span className="text-[#5FB3FF]">&nbsp;Response</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#ADD7FF]">Server error</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;status</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#5DE4C7]">&nbsp;500</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&#125;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&#125;</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

        </code>
    );
};

const ServerlessFunctions = () => {
    return (
        <code className='px-4 py-2 block overflow-x-auto'>
            
            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">import</span>
                <span className="text-[#89DDFF]">&nbsp;type</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;Context</span>
                <span className="text-[#E4F0FB]">,</span>
                <span className="text-[#E4F0FB]">&nbsp;Config</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#89DDFF]">&nbsp;from</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">@netlify/functions</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">export</span>
                <span className="text-[#89DDFF]">&nbsp;default</span>
                <span className="text-[#C792EA]">&nbsp;async</span>
                <span className="text-[#89DDFF]">&nbsp;(</span>
                <span className="text-[#5DE4C7]">req</span>
                <span className="text-[#C792EA]">:</span>
                <span className="text-[#7FDBCA]">&nbsp;Request</span>
                <span className="text-[#E4F0FB]">,</span>
                <span className="text-[#5DE4C7]">&nbsp;context</span>
                <span className="text-[#C792EA]">:</span>
                <span className="text-[#7FDBCA]">&nbsp;Context</span>
                <span className="text-[#89DDFF]">)</span>
                <span className="text-[#C792EA]">&nbsp;=&gt;</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;if</span>
                <span className="text-[#E4F0FB]">&nbsp;(req</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#E4F0FB]">method </span>
                <span className="text-[#C792EA]">!==</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">POST</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">&nbsp;return</span>
                <span className="text-[#C792EA]">&nbsp;new</span>
                <span className="text-[#5FB3FF]">&nbsp;Response</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">Method not allowed</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;status</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#5DE4C7]">&nbsp;405</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;try</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div> 

            <div className='whitespace-nowrap'>
                <span className="text-[#C792EA]">&nbsp;&nbsp;&nbsp;&nbsp;const</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;name</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#E4F0FB]">&nbsp;email</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#E4F0FB]">&nbsp;message</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#C792EA]">&nbsp;=</span>
                <span className="text-[#89DDFF]">&nbsp;await</span>
                <span className="text-[#E4F0FB]">&nbsp;req</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#5FB3FF]">json</span>
                <span className="text-[#E4F0FB]">()</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#C792EA]">&nbsp;&nbsp;&nbsp;&nbsp;if</span>
                <span className="text-[#89DDFF]">&nbsp;(</span>
                <span className="text-[#C792EA]">!</span>
                <span className="text-[#E4F0FB]">name</span>
                <span className="text-[#89DDFF]">&nbsp;||</span>
                <span className="text-[#C792EA]">&nbsp;!</span>
                <span className="text-[#E4F0FB]">email</span>
                <span className="text-[#89DDFF]">&nbsp;||</span>
                <span className="text-[#C792EA]">&nbsp;!</span>
                <span className="text-[#E4F0FB]">message</span>
                <span className="text-[#89DDFF]">)</span>
                <span className="text-[#89DDFF]">&nbsp;return</span>
                <span className="text-[#C792EA]">&nbsp;new</span>
                <span className="text-[#5FB3FF]">&nbsp;Response</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">Missing fields</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;status</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#5DE4C7]">&nbsp;400</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className='text-[#A6ACCD] italic'>&nbsp;&nbsp;&nbsp;&nbsp;// Mock email API</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;await</span>
                <span className="text-[#5FB3FF]">&nbsp;fetch</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#ADD7FF]">https://api.emailservice.com/send</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#E4F0FB]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">POST</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#E4F0FB]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headers</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">Authorization</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]">&nbsp;`</span>
                <span className="text-[#ADD7FF]">Bearer&nbsp;</span>
                <span className="text-[#89DDFF]">$&#123;</span>
                <span className="text-[#E4F0FB]">Netlify</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#E4F0FB]">env</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#5FB3FF]">get</span>
                <span className="text-[#ADD7FF]">(</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#ADD7FF]">EMAIL_API_KEY</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#ADD7FF]">)</span>
                <span className="text-[#89DDFF]">&#125;`</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">Content-Type</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">application/json</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;,</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#E4F0FB]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#E4F0FB]">&nbsp;JSON</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#5FB3FF]">stringify</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;to</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">test@example.com</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#E4F0FB]">&nbsp;subject</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]">&nbsp;`</span>
                <span className="text-[#ADD7FF]">Hello world</span>
                <span className="text-[#89DDFF]">`</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#E4F0FB]">&nbsp;text</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]">&nbsp;`</span>
                <span className="text-[#ADD7FF]">Hello </span>
                <span className="text-[#89DDFF]">$&#123;</span>
                <span className="text-[#E4F0FB]">name</span>
                <span className="text-[#89DDFF]">&#125;`</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
            </div>

            <div>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;return</span>
                <span className="text-[#E4F0FB]">&nbsp;Response</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#5FB3FF]">json</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;success</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#7FDBCA]">&nbsp;true</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>
            
            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&#125;</span>
                <span className="text-[#89DDFF]">&nbsp;catch</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div>
        
            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&nbsp;&nbsp;return</span>
                <span className="text-[#C792EA]">&nbsp;new</span>
                <span className="text-[#5FB3FF]">&nbsp;Response</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#ADD7FF]">Server error</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;status</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#5DE4C7]">&nbsp;500</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>
  
            <div className='whitespace-nowrap'>
               <span className="text-[#89DDFF]">&nbsp;&nbsp;&#125;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&#125;</span>
                <span className="text-[#89DDFF]">;</span>
            </div> 

        </code>
    );
};

const DataAndStorage = () => {
    return (
        <code className='px-4 py-2 block overflow-x-auto'>
            
            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">import</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;getStore</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#89DDFF]">&nbsp;from</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">@netlify/blobs</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">import</span>
                <span className="text-[#89DDFF]">&nbsp;type</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;Context</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#89DDFF]">&nbsp;from</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">@netlify/functions</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">import</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;v4</span>
                <span className="text-[#89DDFF]">&nbsp;as</span>
                <span className="text-[#E4F0FB]">&nbsp;uuid</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
                <span className="text-[#89DDFF]">&nbsp;from</span>
                <span className="text-[#89DDFF]">&nbsp;&quot;</span>
                <span className="text-[#ADD7FF]">uuid</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">export</span>
                <span className="text-[#89DDFF]">&nbsp;default</span>
                <span className="text-[#C792EA]">&nbsp;async</span>
                <span className="text-[#89DDFF]">&nbsp;(</span>
                <span className="text-[#5DE4C7]">req</span>
                <span className="text-[#C792EA]">:</span>
                <span className="text-[#7FDBCA]">&nbsp;Request</span>
                <span className="text-[#E4F0FB]">,</span>
                <span className="text-[#5DE4C7]">&nbsp;context</span>
                <span className="text-[#C792EA]">:</span>
                <span className="text-[#7FDBCA]">&nbsp;Context</span>
                <span className="text-[#89DDFF]">)</span>
                <span className="text-[#C792EA]">&nbsp;=&gt;</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#A6ACCD] italic'>&nbsp;&nbsp;// Accessing the request as `multipart/form-data`.</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#C792EA]">&nbsp;&nbsp;const</span>
                <span className="text-[#E4F0FB]">&nbsp;form</span>
                <span className="text-[#C792EA]">&nbsp;=</span>
                <span className="text-[#89DDFF]">&nbsp;await</span>
                <span className="text-[#E4F0FB]">&nbsp;req</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#5FB3FF]">formData</span>
                <span className="text-[#E4F0FB]">()</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#C792EA]">&nbsp;&nbsp;const</span>
                <span className="text-[#E4F0FB]">&nbsp;file</span>
                <span className="text-[#C792EA]">&nbsp;=</span>
                <span className="text-[#E4F0FB]">&nbsp;form</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#5FB3FF]">get</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">file</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">&nbsp;as</span>
                <span className="text-[#7FDBCA]">&nbsp;File</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className='text-[#A6ACCD] italic'>&nbsp;&nbsp;// Generating a unique key for the entry.</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#C792EA]">&nbsp;&nbsp;const</span>
                <span className="text-[#E4F0FB]">&nbsp;file</span>
                <span className="text-[#C792EA]">&nbsp;=</span>
                <span className="text-[#5FB3FF]">&nbsp;uuid</span>
                <span className="text-[#E4F0FB]">()</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <br />

            <div className='whitespace-nowrap'>
                <span className="text-[#C792EA]">&nbsp;&nbsp;const</span>
                <span className="text-[#E4F0FB]">&nbsp;uoloads</span>
                <span className="text-[#C792EA]">&nbsp;=</span>
                <span className="text-[#E4F0FB]">&nbsp;getStore</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#89DDFF]">file-uploads</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;await</span>
                <span className="text-[#E4F0FB]">&nbsp;uploads</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#5FB3FF]">set</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#E4F0FB]">key</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#E4F0FB]">&nbsp;file</span>
                <span className="text-[#89DDFF]">,</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#E4F0FB]">&nbsp;&nbsp;&nbsp;&nbsp;metadata</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#89DDFF]">&nbsp;&#123;</span>
                <span className="text-[#E4F0FB]">&nbsp;country</span>
                <span className="text-[#89DDFF]">:</span>
                <span className="text-[#E4F0FB]">&nbsp;context</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#E4F0FB]">geo</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#E4F0FB]">country</span>
                <span className="text-[#89DDFF]">.</span>
                <span className="text-[#E4F0FB]">name</span>
                <span className="text-[#89DDFF]">&nbsp;&#125;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;&#125;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div> 

            <br />

            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&nbsp;&nbsp;return</span>
                <span className="text-[#C792EA]">&nbsp;new</span>
                <span className="text-[#5FB3FF]">&nbsp;Response</span>
                <span className="text-[#E4F0FB]">(</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#ADD7FF]">Submission saved</span>
                <span className="text-[#89DDFF]">&quot;</span>
                <span className="text-[#E4F0FB]">)</span>
                <span className="text-[#89DDFF]">;</span>
            </div>
  
            <div className='whitespace-nowrap'>
                <span className="text-[#89DDFF]">&#125;</span>
                <span className="text-[#89DDFF]">;</span>
            </div> 

        </code>
    );
};

const ImageCdn = () => {
    return (
        <code className='px-4 py-2 block overflow-x-auto'>

            <div className='whitespace-nowrap'>
                <span className='text-[#A6ACCD] italic'>&lt;-- Resize an image to 200x200 pixels --&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span>&lt;</span>
                <span className='text-[#5DE4C7]'>img</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;src</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>/.netlify/images?url=/photo.jpg&w=200&h=200</span>
                <span className='text-[#89DDFF]'>&quot;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#7FDBCA] italic'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alt</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>Resized and cached image</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

        </code>
    );
};

const AutomaticForms = () => {
    return (
        <code className='px-4 py-2 block overflow-x-auto'>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&lt;</span>
                <span className='text-[#5DE4C7]'>form</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;name</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>contact</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;name</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>POST</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;data-netlify</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>true</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>p</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>label</span>
                <span className='text-[#89DDFF]'>&gt;</span>
                <span className='text-[#E4F0FB]'>Your name:</span>
                <span className='text-[#89DDFF]'>&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>input</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;type</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>text</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;name</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>name</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>&nbsp;/&gt;</span>
                <span className='text-[#89DDFF]'>&lt;/</span>
                <span className='text-[#5DE4C7]'>label</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&lt;</span>
                <span className='text-[#89DDFF]'>/</span>
                <span className='text-[#5DE4C7]'>p</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>p</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>label</span>
                <span className='text-[#89DDFF]'>&gt;</span>
                <span className='text-[#E4F0FB]'>Your email:</span>
                <span className='text-[#89DDFF]'>&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>input</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;type</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>email</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;name</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>email</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>&nbsp;/&gt;</span>
                <span className='text-[#89DDFF]'>&lt;/</span>
                <span className='text-[#5DE4C7]'>label</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&lt;</span>
                <span className='text-[#89DDFF]'>/</span>
                <span className='text-[#5DE4C7]'>p</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>p</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>label</span>
                <span className='text-[#89DDFF]'>&gt;</span>
                <span className='text-[#E4F0FB]'>Your job title:</span>
                <span className='text-[#89DDFF]'>&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>input</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;type</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>text</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;name</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>title</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>&nbsp;/&gt;</span>
                <span className='text-[#89DDFF]'>&lt;/</span>
                <span className='text-[#5DE4C7]'>label</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&lt;</span>
                <span className='text-[#89DDFF]'>/</span>
                <span className='text-[#5DE4C7]'>p</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>
                        
            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>p</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>label</span>
                <span className='text-[#89DDFF]'>&gt;</span>
                <span className='text-[#E4F0FB]'>Message:</span>
                <span className='text-[#89DDFF]'>&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>textarea</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;name</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>message</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>&gt;</span>
                <span className='text-[#89DDFF]'>&lt;/</span>
                <span className='text-[#5DE4C7]'>textarea</span>
                <span className='text-[#89DDFF]'>&gt;</span>
                <span className='text-[#89DDFF]'>&lt;/</span>
                <span className='text-[#5DE4C7]'>label</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&lt;</span>
                <span className='text-[#89DDFF]'>/</span>
                <span className='text-[#5DE4C7]'>p</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>p</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&nbsp;&nbsp;&lt;</span>
                <span className='text-[#5DE4C7]'>button</span>
                <span className='text-[#7FDBCA] italic'>&nbsp;type</span>
                <span className='text-[#89DDFF]'>=</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>submit</span>
                <span className='text-[#89DDFF]'>&quot;</span>
                <span className='text-[#89DDFF]'>&gt;</span>
                <span className='text-[#E4F0FB]'>Send</span>
                <span className='text-[#89DDFF]'>&lt;/</span>
                <span className='text-[#5DE4C7]'>button</span>
                <span className='text-[#89DDFF]'>&gt;</span>
                <span className='text-[#89DDFF]'>&lt;/</span>
                <span className='text-[#5DE4C7]'>label</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&nbsp;&nbsp;&lt;</span>
                <span className='text-[#89DDFF]'>/</span>
                <span className='text-[#5DE4C7]'>p</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

            <div className='whitespace-nowrap'>
                <span className='text-[#89DDFF]'>&lt;</span>
                <span className='text-[#89DDFF]'>/</span>
                <span className='text-[#5DE4C7]'>form</span>
                <span className='text-[#89DDFF]'>&gt;</span>
            </div>

        </code>
    );
};

const Code = ({ primitiveName }: { primitiveName: PrimitiveName }) => {
    return (
        primitiveName === 'AI Gateway' 
        
        ?   <AIGatewayCode />

        :   primitiveName === 'Serverless functions'

        ?   <ServerlessFunctions />

        :   primitiveName === 'Data & storage'

        ?   <DataAndStorage />

        :   primitiveName === 'Image CDN'

        ?   <ImageCdn />

        :   <AutomaticForms />
    );
};

export default Code;