type HbookBookingInlineProps = {
  scriptSrc: string;
};

const HbookBookingInline = ({ scriptSrc }: HbookBookingInlineProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70]">
      <iframe
        srcDoc={`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="content-language" content="pt-BR"><meta name="language" content="pt-BR"><style>html,body{margin:0;padding:0;background:transparent}#hbook-search{margin:0;padding:0}</style></head><body><div id="hbook-search"></div><script async src='${scriptSrc}'></script></body></html>`}
        className="w-full border-0"
        style={{ minHeight: 130 }}
        title="Motor de Reservas Havana Palace I"
      />
    </div>
  );
};

export default HbookBookingInline;
