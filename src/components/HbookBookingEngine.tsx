type HbookBookingEngineProps = {
  scriptSrc?: string;
  title?: string;
};

const DEFAULT_SCRIPT_SRC = "https://s3-sa-east-1.amazonaws.com/hbook-universal-js/js/696645dcd22abe32731566c6.js";

const HbookBookingEngine = ({ scriptSrc = DEFAULT_SCRIPT_SRC, title }: HbookBookingEngineProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-secondary font-body text-sm uppercase tracking-[0.3em]">
            Reservas
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary">
            Faça sua Reserva
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
        </div>
        <iframe
          srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0;font-family:sans-serif}#hbook-search{margin:0;padding:0}</style></head><body><div id="hbook-search"></div><script async src='${scriptSrc}'></script></body></html>`}
          className="w-full border-0"
          style={{ minHeight: 130 }}
          title={title ?? "Motor de Reservas Havana"}
          onLoad={(e) => {
            const iframe = e.currentTarget;
            try {
              const doc = iframe.contentDocument;
              const setHeightFromWidget = () => {
                try {
                  const currentDoc = iframe.contentDocument;
                  const widgetRoot = currentDoc?.getElementById("hbook-search");
                  const height =
                    // Prefer the widget container height to avoid measuring extra whitespace.
                    (widgetRoot?.scrollHeight ?? 0) ||
                    (currentDoc?.body?.scrollHeight ?? 0);
                  if (height && height > 0) iframe.style.height = `${height}px`;
                } catch (_) {
                  // Ignore resize errors (e.g. document access issues).
                }
              };

              // Set an initial height close to the expected widget size.
              setHeightFromWidget();

              if (doc?.body) {
                const target = doc.getElementById("hbook-search") ?? doc.body;
                const resizeObserver = new ResizeObserver(() => setHeightFromWidget());
                resizeObserver.observe(target);

                // Safety: stop observing after some time (prevents runaway observers).
                window.setTimeout(() => resizeObserver.disconnect(), 15000);
              }
            } catch (_) {
              // Ignore iframe document access errors.
            }
          }}
        />
      </div>
    </section>
  );
};

export default HbookBookingEngine;
