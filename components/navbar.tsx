"use client";

import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Check, ChevronDown, Search } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "./ui/command";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const frameworks = [
  {
    value: "google",
    label: "Google",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 mr-2"
        viewBox="0 0 24 24"
        id="google"
      >
        <path
          className="fill-zinc-500/80 dark:fill-white/80"
          d="M12.22182,5.97728c1.42137-0.02391,2.79488,0.51341,3.82273,1.49545l2.86819-2.86818
		c-1.81006-1.7-4.20788-2.63339-6.69092-2.60455C8.44087,1.99855,4.98265,4.13047,3.28544,7.5091L6.62636,10.1
		C7.41416,7.66784,9.66545,6.00909,12.22182,5.97728z"
        ></path>
        <path
          className="fill-zinc-500 dark:fill-white"
          d="M3.28547,7.50908c-1.41819,2.82599-1.41819,6.15582,0,8.98181L6.62634,13.9
		c-0.41812-1.23216-0.41812-2.56784,0-3.8L3.28547,7.50908z"
        ></path>
        <path
          className="fill-zinc-500/70 dark:fill-white/70"
          d="M15.60822,17.06822c-2.80401,1.79981-6.53614,0.98574-8.33595-1.81827
		c-0.2705-0.42143-0.48748-0.8749-0.64593-1.34995l-3.34087,2.59089C4.98265,19.86954,8.44089,22.00147,12.22185,22
		c2.43429,0.06602,4.8018-0.80065,6.61815-2.42269L15.60822,17.06822z"
        ></path>
        <path
          className="fill-zinc-500/60 dark:fill-white/60"
          d="M21.64001,10.18182h-9.41815v3.86816h5.38177c-0.22498,1.23639-0.94592,2.3269-1.99542,3.01819
			c-0.00317,0.00208-0.00647,0.0036-0.00964,0.00562c0.00317-0.00201,0.00647-0.00354,0.00964-0.00555l3.23175,2.50909
			l0.00006-0.00006c1.9903-1.91693,3.07397-4.5882,2.98181-7.34998C21.82239,11.54138,21.76154,10.85687,21.64001,10.18182z"
        ></path>
      </svg>
    ),
  },
  {
    value: "youtube",
    label: "Youtube",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-4 h-4 mr-2 fill-zinc-500 dark:fill-white"
      >
        <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
      </svg>
    ),
  },
  {
    value: "music",
    label: "Music",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-4 h-4 mr-2"
      >
        <path
          className="fill-zinc-500 dark:fill-white"
          d="M50,2.5C23.766,2.5,2.5,23.823,2.5,50.126c2.502,63.175,92.507,63.157,95-0.001
    C97.5,23.823,76.233,2.5,50,2.5z M50,77.399c-15.036,0-27.27-12.233-27.27-27.27c0.74-18.662,14.654-27.134,27.269-27.134
    c0.001,0,0.001,0,0.002,0c12.616,0.001,26.531,8.473,27.267,27.073C77.27,65.167,65.036,77.399,50,77.399z"
        ></path>
        <path
          className="fill-zinc-500 dark:fill-white"
          d="M50.002,26.103c-15.946-0.001-23.704,12.486-24.165,24.088C25.838,63.453,36.677,74.292,50,74.292
    S74.162,63.453,74.162,50.13C73.705,38.591,65.948,26.105,50.002,26.103z"
        ></path>
        <path
          className="fill-white dark:fill-zinc-500"
          d="M41.055,52.528c-0.001,2.575,0.001,7.867,0,10.46c0,0,21.802-13.417,21.802-13.417L41.055,37.272V52.528z"
        ></path>
      </svg>
    ),
  },
];

const formSchema = z.object({
  searchValue: z.string().min(0).max(9999),
});

type formValues = z.infer<typeof formSchema>;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("google");
  const router = useRouter();

  const onRedirect = (data: formValues) => {
    form.reset();
    if (value === "youtube") {
      router.push(
        `https://www.youtube.com/results?search_query=${data.searchValue
          .split(" ")
          .join("+")}`
      );
    } else if (value === "google") {
      router.push(
        `https://google.com/search?q=${data.searchValue.split(" ").join("+")}`
      );
    } else {
      router.push(
        `https://music.youtube.com/search?q=${data.searchValue
          .split(" ")
          .join("+")}`
      );
    }
  };

  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  return (
    <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <h1 className="font-bold text-2xl">DASHBOARD</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onRedirect)}>
          <div className="max-w-md w-screen relative">
            <FormField
              control={form.control}
              name="searchValue"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 pl-20 pr-10 placeholder:text-zinc-500/50 dark:placeholder:text-white/50"
                      placeholder="Search..."
                      autoComplete="off"
                      autoFocus
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="absolute top-0 left-0 bg-transparent text-zinc-500 dark:text-white/80 rounded-r-none dark:hover:bg-zinc-700/50 border-0"
                >
                  {
                    frameworks.find((framework) => framework.value === value)
                      ?.icon
                  }
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-[150px]" align="start">
                <Command>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue);
                          setOpen(false);
                        }}
                      >
                        <div className="flex flex-1 items-center">
                          {framework.icon}
                          {framework.label}
                        </div>
                        <Check
                          className={cn(
                            "h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <Button
              type="submit"
              variant={"outline"}
              size={"icon"}
              className="border-0 absolute top-0 right-0 bg-transparent rounded-l-none dark:hover:bg-zinc-700/50"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Navbar;
