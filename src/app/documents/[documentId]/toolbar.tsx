"use client";
import useEditorStore from "@/app/store/use-editor-store";
import { cn } from "@/lib/utils";
import {
  LucideIcon,
  PrinterIcon,
  Redo2Icon,
  SpellCheckIcon,
  Undo2Icon,
} from "lucide-react";

const Toolbar = () => {
  const { editor } = useEditorStore();
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick?: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false",
          );
        },
      },
    ],
  ];
  return (
    <div className="flex min-h-[40px] items-center gap-x-0.5 overflow-x-auto rounded-[24px] bg-[#F1F4F9] px-2.5 py-0.5">
      {sections[0].map((item) => {
        return <ToolbarButton key={item.label} {...item} />;
      })}
    </div>
  );
};

export default Toolbar;

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  //此处解构后必须重新映射为大写的变量,因为react组件必须大写开头
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-7 min-w-7 items-center justify-center rounded-sm text-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80",
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};
