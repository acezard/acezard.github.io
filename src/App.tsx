import { profileData } from "./data/profile";

export const App = () => 
   (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-6">

          <header className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {profileData.name}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {profileData.title}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {profileData.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Email
              </a>
              <a
                href={profileData.cvPath}
                download
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Download CV
              </a>

              <div className="ml-1 flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-slate-900 dark:hover:text-slate-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.6 1.9 2.8 1.3.1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C18 4 19 4.3 19 4.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.4-5.4 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-slate-900 dark:hover:text-slate-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm-2.3 6H7.3V21H2.68V9.5ZM9.5 9.5h4.44v1.57h.06c.62-1.17 2.14-2.4 4.4-2.4 4.71 0 5.58 3.1 5.58 7.13V21H19.3v-4.2c0-1 0-2.28-.55-3.05-.56-.8-1.36-1.3-2.59-1.3-2.13 0-3.4 1.44-3.4 3.55V21H9.5V9.5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </header>

          <hr className="my-6 border-slate-200 dark:border-slate-800" />

          <section className="space-y-2 text-sm">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {profileData.skills.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              {profileData.skills.primary}
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              {profileData.skills.secondary}
            </p>
          </section>

          <hr className="my-6 border-slate-200 dark:border-slate-800" />

          <section className="space-y-2 text-sm">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {profileData.whatIDo.title}
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
              {profileData.whatIDo.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <hr className="my-6 border-slate-200 dark:border-slate-800" />

          <section className="text-sm">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {profileData.contact.title}
            </h2>
            <p className="mt-1 text-slate-600 dark:text-slate-300">
              {profileData.contact.location}
            </p>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="mt-1 inline-flex text-slate-900 underline underline-offset-2 dark:text-slate-100"
            >
              {profileData.contact.email}
            </a>
          </section>
        </div>
      </div>
    </div>
  )