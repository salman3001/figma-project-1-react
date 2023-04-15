import React from "react";
import SocialIcons from "../common/SocialIcons";

const Blog = () => {
  return (
    <div className="p-5 md:p-20 pb-5 flex flex-col gap-6">
      <h1 className="text-2xl md:text-4xl font-bold">
        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in
        45 BC
      </h1>
      <div className="flex justify-between items-end">
        <div className="flex flex-wrap gap-2 max-w-sm ">
          <button className="btn-4">UIUX</button>
          <button className="btn-4">UIUX</button>
          <button className="btn-4">UIUX</button>
          <button className="btn-4">UIUX</button>
          <button className="btn-4">UIUX</button>
        </div>
        <div className="flex h-8 ">
          <SocialIcons color1="#00A5BF" color2="white" />
        </div>
      </div>
      <img
        src={import.meta.env.VITE_BASE_URL + "/images/Blog-photo.png"}
        alt=""
      />
      <h1 className="text-xl md:text-3xl font-semibold py-4">
        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in
        45 BC written by Cicero in 45 BC
      </h1>
      <p className="py-2 text-lg md:text-2xl md:leading-10">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </p>
      <p className="py-2 text-lg md:text-2xl md:leading-10">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio.
      </p>
      <h1 className="text-xl md:text-3xl font-semibold py-4">
        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in
        45 BC written by Cicero in 45 BC
      </h1>
      <p className="py-2 text-lg md:text-2xl md:leading-10">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio.
      </p>
      <div className="text-lg md:text-2xl flex justify-between [&>button]:text-[#00A5BF]">
        <button>&lt; Previous</button>
        <button>Next &gt;</button>
      </div>
    </div>
  );
};

export default Blog;
