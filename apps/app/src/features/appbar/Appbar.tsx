import ThemeModeSwitcher from './ThemeModeSwitcher';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@shadcn/components/ui/avatar';

const Appbar = () => {
  return (
    <div className="w-full h-16 border-b flex items-center place-content-between px-2">
      <div>
        <ThemeModeSwitcher />
      </div>
      <div className="">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Appbar;
