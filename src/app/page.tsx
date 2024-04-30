import Image from "next/image";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/8496afda-a2c8-436b-aaa1-f293817dc093-btuhvr.jpeg",
    "https://utfs.io/f/b742d04b-4fca-4a56-af40-0ec7cb44c771-bu9tpn.jpeg",
    "https://utfs.io/f/f93ad44f-8c11-4ed6-af4b-f324b6f819e9-fys2c1.jpeg",
    "https://utfs.io/f/cba87830-d911-4c19-b366-d9eaff35705e-fys27m.jpeg",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <Image src={image.url} alt="" width={200} height={200} />
          </div>
        ))}
      </div>
    </main>
  );
}
