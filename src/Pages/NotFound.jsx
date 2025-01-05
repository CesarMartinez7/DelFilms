import { Icon } from "@iconify/react/dist/iconify.js";

export default function NotFound() {
  return (
    <section className="flex justify-center flex-col gap-3 items-center h-screen">
      <h3 className="font-bold text-[6rem]">{"T_T"}</h3>
      <h1 className="text-2xl">Sorry, we can't find this page.</h1>
      <div className="relative mt-4 inline-grid gap-3 grid-cols-3">
        <button className="btn">
        <Icon icon="iconoir:home" width="24" height="24" />
            Inicio</button>
        <button className="btn btn-neutral">
        <Icon icon="iconoir:github" width="24" height="24" />
        Github
        </button>
        <button className="btn btn-primary">Primary</button>
      </div>
    </section>
  );
}
