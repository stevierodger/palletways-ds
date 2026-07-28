import "./ColorRamp.css";

export type ColorRampStep = {
  step: string;
  value: string;
  cssVar: string;
  usage?: string;
};

export type ColorRampProps = {
  name: string;
  description?: string;
  steps: ColorRampStep[];
};

export function ColorRamp({ name, description, steps }: ColorRampProps) {
  return (
    <div className="color-ramp">
      <div className="color-ramp__header">
        <h3 className="color-ramp__name">{name}</h3>
        {description && <p className="color-ramp__description">{description}</p>}
      </div>
      <div className="color-ramp__strip" role="list" aria-label={`${name} color ramp`}>
        {steps.map((step) => (
          <div key={step.step} className="color-ramp__step" role="listitem">
            <div
              className="color-ramp__swatch"
              style={{ background: step.value }}
              title={`${name} ${step.step}: ${step.value}`}
            />
            <div className="color-ramp__meta">
              <span className="color-ramp__step-label">{step.step}</span>
              <code className="color-ramp__var">{step.cssVar}</code>
              <span className="color-ramp__hex">{step.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
