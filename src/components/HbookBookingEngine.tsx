const HbookBookingEngine = () => {
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
          srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;font-family:sans-serif}</style></head><body><div id="hbook-search"></div><script async src="https://s3-sa-east-1.amazonaws.com/hbook-universal-js/js/696645dcd22abe32731566c6.js"><\/script></body></html>`}
          className="w-full border-0"
          style={{ minHeight: "500px" }}
          title="Motor de Reservas Havana Palace I"
          onLoad={(e) => {
            const iframe = e.currentTarget;
            try {
              const doc = iframe.contentDocument;
              if (doc?.body) {
                const resizeObserver = new ResizeObserver(() => {
                  try {
                    const height = doc.body.scrollHeight;
                    if (height) iframe.style.height = height + "px";
                  } catch (_) {}
                });
                resizeObserver.observe(doc.body);
              }
            } catch (_) {}
          }}
        />
      </div>
    </section>
  );
};

export default HbookBookingEngine;
