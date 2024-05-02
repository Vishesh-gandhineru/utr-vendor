
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { JSX, SVGProps } from "react"

export default function VandorProfile() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h1 className="text-xl font-semibold">Jared Palmer</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">jared@acme.inc</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <MoveVerticalIcon className="h-5 w-5" />
              <span className="sr-only">Open user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
            <DropdownMenuItem>Change Password</DropdownMenuItem>
            <DropdownMenuItem>Account Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid gap-8">
        <div>
          <h2 className="text-lg font-semibold">Basic Information</h2>
          <div className="mt-4 grid gap-4">
            <div className="grid grid-cols-[minmax(100px,_1fr)_2fr] items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <div className="flex items-center gap-2">
                <Input defaultValue="Jared Palmer" id="name" />
                <Button size="icon" variant="outline">
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(100px,_1fr)_2fr] items-center gap-4">
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center gap-2">
                <Input defaultValue="jared@acme.inc" id="email" type="email" />
                <Button size="icon" variant="outline">
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(100px,_1fr)_2fr] items-center gap-4">
              <Label htmlFor="bio">Bio</Label>
              <div className="flex items-center gap-2">
                <Textarea className="min-h-[100px]" defaultValue="I'm a software engineer at Acme Inc." id="bio" />
                <Button size="icon" variant="outline">
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Contact Details</h2>
          <div className="mt-4 grid gap-4">
            <div className="grid grid-cols-[minmax(100px,_1fr)_2fr] items-center gap-4">
              <Label htmlFor="phone">Phone</Label>
              <div className="flex items-center gap-2">
                <Input defaultValue="+1 (555) 555-5555" id="phone" />
                <Button size="icon" variant="outline">
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(100px,_1fr)_2fr] items-center gap-4">
              <Label htmlFor="address">Address</Label>
              <div className="flex items-center gap-2">
                <Textarea className="min-h-[100px]" defaultValue="123 Main St, Anytown USA" id="address" />
                <Button size="icon" variant="outline">
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Settings</h2>
          <div className="mt-4 grid gap-4">
            <div className="grid grid-cols-[minmax(100px,_1fr)_2fr] items-center gap-4">
              <Label htmlFor="language">Language</Label>
              <div className="flex items-center gap-2">
                <Select defaultValue="en" >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </Select>
                <Button size="icon" variant="outline">
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(100px,_1fr)_2fr] items-center gap-4">
              <Label htmlFor="timezone">Timezone</Label>
              <div className="flex items-center gap-2">
                <Select defaultValue="America/New_York">
                  <option value="America/New_York">Eastern Time (US & Canada)</option>
                  <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                  <option value="Europe/London">London</option>
                  <option value="Asia/Tokyo">Tokyo</option>
                </Select>
                <Button size="icon" variant="outline">
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(100px,_1fr)_2fr] items-center gap-4">
              <Label htmlFor="notifications">Notifications</Label>
              <div className="flex items-center gap-2">
                <Checkbox defaultChecked id="notifications" />
                <Button size="icon" variant="outline">
                  <CheckIcon className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function MoveVerticalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  )
}