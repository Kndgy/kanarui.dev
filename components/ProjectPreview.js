import { useState } from "react";
import Image from "next/image";

export default function ProjectPreview({ project }) {
  const [frame, setFrame] = useState(0);
  if (project.credits)
    return (
      <div className="studio-preview">
        <div className="preview-toolbar">
          <span>STUDIO WORK / CORAL ISLAND</span>
        </div>
        <div className="studio-preview-inner">
          <p className="eyebrow">
            {project.studio} / {project.period}
          </p>
          <h3>Coral Island</h3>
          <p className="studio-role">Unreal Engine C++ UI Engineer</p>
          <div className="studio-contributions">
            <span>Gameplay & subsystems</span>
            <span>Input & virtual keyboards</span>
            <span>Inventory mechanics</span>
          </div>
          <p className="eyebrow">TEAM PROJECT · UI ENGINEERING</p>
        </div>
      </div>
    );
  if (project.images)
    return (
      <div className="project-preview">
        <div className="preview-toolbar">
          <span>CRAFTING BLUEPRINT / WORKSPACE</span>
          <span>{project.images[frame].label}</span>
        </div>
        <a
          className="screenshot-link"
          href={project.images[frame].src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open full-size ${project.images[frame].label} screenshot`}
        >
          <Image
            src={project.images[frame].src}
            alt={`Crafting Blueprint ${project.images[frame].label}, with behavior logic and linked Minecraft entity properties`}
            width={1860}
            height={1154}
            priority
          />
          <span className="expand-image">View full size ↗</span>
        </a>
        <div className="preview-tabs" aria-label="Screenshot views">
          {project.images.map((image, index) => (
            <button
              key={image.src}
              aria-pressed={frame === index}
              onClick={() => setFrame(index)}
            >
              <span className="square" />
              {image.label}
            </button>
          ))}
        </div>
      </div>
    );
  if (project.id === 2)
    return (
      <div
        className="design-preview"
        aria-label="A sample of the NieR interface design language"
      >
        <div className="preview-toolbar">
          <span>INTERFACE STUDY / YoRHa</span>
        </div>
        <div className="design-preview-inner">
          <span className="eyebrow">SYSTEM MENU</span>
          <h3>
            ARCHIVES<span>DATA</span>
          </h3>
          <div className="specimen-grid">
            <div>
              <div className="specimen-selected">
                ■ &nbsp; Intel <span>›</span>
              </div>
              <div>■ &nbsp; Weapons</div>
              <div>■ &nbsp; Items</div>
            </div>
            <div className="specimen-info">
              <strong>■ &nbsp; System information</strong>
              <p>
                Human-made interfaces.
                <br />
                Machine-like precision.
              </p>
              <div className="swatches">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <p className="specimen-footer">
            Glory to mankind. <span>◇</span>
          </p>
        </div>
      </div>
    );
  return (
    <div className="converter-preview">
      <div className="preview-toolbar">
        <span>CONVERSION STUDY / JSX → UMG</span>
      </div>
      <div className="converter-inner">
        <div className="eyebrow">ONE HIERARCHY. TWO WORLDS.</div>
        <div className="conversion-flow">
          <div>
            <span className="code-label">JSX INPUT</span>
            <pre>
              <code>
                {"<Panel>\n  <Text>\n    Hello, world.\n  </Text>\n</Panel>"}
              </code>
            </pre>
          </div>
          <span className="conversion-arrow" aria-hidden="true">
            →
          </span>
          <div>
            <span className="code-label">UI HIERARCHY</span>
            <div className="node-root">Panel</div>
            <div className="node-child">
              └─ Text<span>Hello, world.</span>
            </div>
          </div>
        </div>
        <p className="concept-caption">
          Conceptual workflow · JSX parsing for Unreal interfaces
        </p>
      </div>
    </div>
  );
}
