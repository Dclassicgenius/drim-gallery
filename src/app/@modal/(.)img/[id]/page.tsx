import { Modal } from "./modal";
import FullImageView from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid photo id");
  }

  return (
    <Modal>
      <FullImageView id={idAsNumber} />
    </Modal>
  );
}
