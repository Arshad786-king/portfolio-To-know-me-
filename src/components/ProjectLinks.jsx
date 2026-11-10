import React from 'react';
import { ExternalLink, Code2, AlertCircle } from 'lucide-react';
import { Github } from './BrandIcons';
import Button from './Button';

export default function ProjectLinks({
  githubUrl,
  liveUrl,
  isDeployed = false,
  isPersonal = false,
  statusNotice = null,
  showConfigurationGuide = false,
  className = ''
}) {
  const hasGithub = Boolean(githubUrl && githubUrl.trim() !== "");
  const hasLive = Boolean(liveUrl && liveUrl.trim() !== "");

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        {/* GitHub Button */}
        {hasGithub ? (
          <Button
            href={githubUrl}
            variant="secondary"
            size="md"
            icon={Github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code
          </Button>
        ) : (
          <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-slate-50 text-slate-500 border border-slate-200">
            <Github className="w-4 h-4 text-slate-400" />
            <span>Repository: Private / Config in <code className="text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded font-mono">projects.js</code></span>
          </div>
        )}

        {/* Live Website Button */}
        {hasLive ? (
          <Button
            href={liveUrl}
            variant="primary"
            size="md"
            icon={ExternalLink}
            iconPosition="right"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Project
          </Button>
        ) : (
          <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-emerald-50/60 text-emerald-800 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>
              {isPersonal
                ? "Personal Project – In Development (Not Deployed)"
                : "Deployment URL: Configurable in projects.js"}
            </span>
          </div>
        )}
      </div>

      {/* Optional developer status banner — only show when no live URL is present */}
      {statusNotice && !hasLive && (
        <div className="flex items-start gap-2 p-3 text-xs rounded-xl bg-amber-50 text-amber-900 border border-amber-200/80">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{statusNotice}</p>
        </div>
      )}
    </div>
  );
}
