import Editor from "@/app/documents/[documentId]/editor";

const Page = async ({ params }: PageProps) => {
  const { documentId } = await params;

  return (
    <div className="min-h-full bg-[#FAFBFD]">
      <Editor />
    </div>
  );
};

export default Page;

interface PageProps {
  params: Promise<{ documentId: string }>;
}
