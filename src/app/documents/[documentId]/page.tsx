import Editor from "@/app/documents/[documentId]/editor";
import Toolbar from "@/app/documents/[documentId]/toolbar";

const Page = async ({ params }: PageProps) => {
  const { documentId } = await params;

  return (
    <div className="min-h-full bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default Page;

interface PageProps {
  params: Promise<{ documentId: string }>;
}
