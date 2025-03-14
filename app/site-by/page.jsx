import Link from 'next/link';

function Page() {
  return (
    <div className="min-h-screen bg-background">

      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        {/* Add Home Button */}
        <Link
          href="/"
          className="inline-block mb-8 px-6 py-2 rounded-lg
                   bg-card hover:bg-card/90
                   text-foreground
                   transition-all duration-300 ease-out
                   border border-border/50 hover:border-primary/50
                   hover:shadow-lg hover:-translate-y-1"
        >
          ← Back to Home
        </Link>

        <div className="relative overflow-hidden bg-gradient-to-b from-card to-card/50 
                      rounded-xl border border-border/50 shadow-2xl
                      backdrop-blur-sm transition-all duration-300
                      hover:shadow-3xl hover:border-border/70">

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full 
                          bg-primary/10 blur-3xl"></div>
            <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full 
                          bg-secondary/10 blur-3xl"></div>
          </div>

          <div className="relative p-8 sm:p-12 space-y-12">

            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                Bekretsion
              </h1>
              <p className="text-lg text-muted-foreground">
                Software Developer
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <Link 
                href="https://linkedin.com/in/your-profile" 
                target="_blank"
                className="group flex items-center w-full p-4 rounded-lg
                         bg-card hover:bg-card/90
                         text-foreground
                         transition-all duration-300 ease-out
                         border border-border/50 hover:border-primary/50
                         hover:shadow-lg hover:-translate-y-1"
              >
                <span className="font-medium group-hover:text-primary">LinkedIn:</span>
                <span className="ml-2 text-muted-foreground group-hover:text-foreground">
                  https://www.linkedin.com/in/bekretsion-seyoum-75784328a/
                </span>
              </Link>

              <a 
                href="mailto:your.email@example.com"
                className="group flex items-center w-full p-4 rounded-lg
                         bg-card hover:bg-card/90
                         text-foreground
                         transition-all duration-300 ease-out
                         border border-border/50 hover:border-primary/50
                         hover:shadow-lg hover:-translate-y-1"
              >
                <span className="font-medium group-hover:text-primary">Email:</span>
                <span className="ml-2 text-muted-foreground group-hover:text-foreground">
                  bekretsionseyoum4@gmail.com
                </span>
              </a>
            </div>

            {/* Brief Bio */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-muted-foreground text-center text-lg leading-relaxed max-w-2xl mx-auto">
                I am a passionate software developer with expertise in web development.
                Feel free to reach out to me through any of the channels above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;