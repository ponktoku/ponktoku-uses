import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

type CategoryDropdownProps = {
  categories: string[];
};

export default function CategoryDropdown({
  categories,
}: CategoryDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon className="h-5 w-5 rotate-0 scale-100 transition-all" />
          <span className="sr-only">Category dropdown</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="text-orange-500">
          Categories
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {categories.map((category) => {
          return (
            <a key={category} href={`/posts/category/${category}`}>
              <DropdownMenuItem className="justify-between capitalize">
                {category}
              </DropdownMenuItem>
            </a>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
