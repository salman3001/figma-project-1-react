import { Button, Typography } from "@mui/material";
import SocialLinks from "../Components/Webiste/Common/SocialLinks";

const Blog = () => {
  return (
    <div className=" respnsive-pading-1 respnsive-pading-2 flex flex-col gap-6">
      <Typography variant="h55" fontWeight={600}>
        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in
        45 BC
      </Typography>
      <div className="flex justify-between items-end">
        <div className="flex flex-wrap gap-2 max-w-sm ">
          <button className="btn-4">UIUX</button>
          <button className="btn-4">UIUX</button>
          <button className="btn-4">UIUX</button>
          <button className="btn-4">UIUX</button>
          <button className="btn-4">UIUX</button>
        </div>
        <div className="flex h-8 ">
          <SocialLinks color1="#00A5BF" color2="white" />
        </div>
      </div>
      <img
        src={import.meta.env.VITE_BASE_URL + "/images/Blog-photo.png"}
        alt=""
      />
      <Typography variant="h45" fontWeight={600}>
        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in
        45 BC
      </Typography>
      <Typography variant="body32">
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
      </Typography>
      <Typography variant="body32">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio.
      </Typography>
      <Typography variant="h45" fontWeight={600}>
        Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in
        45 BC
      </Typography>
      <Typography variant="body32">
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
      </Typography>
      <Typography variant="body32">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio.
      </Typography>
      <div className="text-lg md:text-2xl flex justify-between [&>button]:text-[#00A5BF]">
        <Button size="large" sx={{ fontSize: "2rem" }}>
          &lt; Previous
        </Button>
        <Button size="large" sx={{ fontSize: "2rem" }}>
          {" "}
          Next &gt;
        </Button>
      </div>
    </div>
  );
};

export default Blog;
