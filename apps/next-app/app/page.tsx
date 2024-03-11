import { Button } from '@shadcn/components/ui/button';
import { ThemeSwitcher } from './themeSwitcher';

export default async function Index() {
  return (
    <div>
      <Button>Click me</Button>
      <ThemeSwitcher />
    </div>
  );
}
