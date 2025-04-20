export default function DemoPage() {
  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-start justify-center space-y-4 text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Schedule a Demo
                </h1>
                <p className="max-w-[500px] text-muted-foreground md:text-xl/relaxed">
                  See how Findre can help turn you automate your financial
                  document workflows.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 overflow-auto">
              <iframe
                src="https://zcal.co/i/d8y1-lJN/embed"
                frameBorder="0"
                style={{
                  width: '100%',
                  height: '700px',
                  overflow: 'auto',
                  scrollbarWidth: 'auto',
                  scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent',
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
