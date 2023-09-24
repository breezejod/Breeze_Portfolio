import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-zinc-900 h-[100vh] scroll-smooth">
        <div>
          <h1 className="pt-20 text-3xl font-sedgwick-ave-display pl-80 text-slate-500 hover:text-slate-400 transition-all duration-500">
            My Story
          </h1>
        </div>
        <div className="border border-slate-700 mt-8 rounded-md ml-40 mr-80">
          <h2 className="container text-lg text-stone-300 pt-7 pl-7 text-gold-500 text-shadow-md pb-7 pr-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta deserunt sunt delectus libero nobis ipsa ea laudantium, ipsum, est amet rerum tenetur possimus similique nisi! Ex nulla sequi distinctio sit similique, reiciendis, voluptate quos minus quibusdam, rem molestiae illum perferendis. Voluptatum quia sit laudantium pariatur at iste autem repellat fugit delectus voluptatibus beatae, unde dolore. Aliquam, reprehenderit quisquam incidunt iure exercitationem asperiores ab quaerat facere hic soluta maxime aspernatur autem perferendis? Quibusdam corrupti architecto distinctio, illum cumque cupiditate tenetur dolorem itaque totam, magnam ab, minus quaerat quo voluptates! Dolor quasi minus maiores, nihil laborum vel amet beatae labore, repudiandae cum sunt tempore ullam aperiam non repellendus, provident quisquam. Impedit voluptates, cum rem sint dignissimos ad cupiditate corrupti culpa exercitationem voluptatibus tempora, cumque adipisci quas officiis vero natus labore minima obcaecati dolor? Facilis totam accusantium doloremque, repellendus eaque pariatur soluta dolor sit dolorem repudiandae corporis iure, possimus magni amet perspiciatis quia natus, nulla itaque recusandae ducimus vero dolores dicta quas maiores? Explicabo quas dolorum corporis eveniet possimus maiores quisquam perferendis rerum voluptatem aspernatur, voluptatibus, impedit iure velit ab commodi ut ea quis, ducimus labore minima illo quaerat dignissimos fugit? Impedit tempore accusantium inventore rerum porro libero quibusdam aperiam reiciendis mollitia xercitationem asperiores ab quaerat facere hic soluta maxime aspernatur autem perferendis? Quibusdam corrupti architecto distinctio, illum cumque cupiditate tenetur dolorem itaque totam, magnam ab, minus quaerat quo voluptates! Dolor quasi minus maiores, nihil laborum vel amet beatae labore, repudiandae cum sunt tempore ullam aperiam non repellendus, provident quisquam. Impedit voluptates, cum rem sint dignissimos ad cupiditate corrupti culpa exercitationem vo.
          </h2>
        </div>
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #6b8095;
            border-radius: 7px;
          }

          ::-webkit-scrollbar-track {
            background-color: #333; /* Change this to the color you want for the track */
          }
        `}
      </style>
    </>
  );
};

export default About;
