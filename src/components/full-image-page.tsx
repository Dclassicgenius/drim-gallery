import { getImage } from "~/server/queries";

export default async function FullImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div>
      <img src={image.url} alt="" className="w-96" />
    </div>
  );
}
