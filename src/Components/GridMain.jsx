

export default function GridMain() {
  return (
    <div className=" flex justify-center items-center w-full h-full flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[100px] w-full h-full place-content-center">
        
        <div className="card col-span-2 row-span-2 bg-primary shadow-xl buttonn spark">
          <div className="card-body items-center justify-center">
          <h2 className="card-title">Novedades</h2>
          <p>Descubre las últimas películas añadidas a nuestra colección. Desde blockbusters hasta joyas independientes, tenemos algo para todos los gustos.</p>
          </div>
        </div>
        <div className="card col-span-2 bg-secondary shadow-xl   ">
          <div className="card-body  items-center justify-center">
          <h2 className="card-title">Géneros</h2>
          <p>Lorem ipsum dolor sit, amet consectetur </p>
          </div>
        </div>
        <div className="card row-span-2 bg-accent  shadow-xl">
          <div className="card-body items-center justify-center">
          <h2 className="card-title">Top 10</h2>
          <p>Las películas más vistas esta semana. ¿Ya las has visto todas?</p>
          </div>
        </div>
        <div className="card bg-neutral  shadow-xl">
          <div className="card-body items-center justify-center">
          <h2 className="card-title text-sm">Clásicos</h2>
          <p className="text-xs">Revive las obras maestras del cine.</p>
          </div>
        </div>
        <div className="card col-span-2 bg-info  shadow-xl">
          <div className="card-body items-center justify-center">
            <h2 className="card-title">5</h2>
          </div>
        </div>
        <div className="card bg-success  shadow-xl">
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-sm">6</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

