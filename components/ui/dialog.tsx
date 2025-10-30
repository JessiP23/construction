"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export const DialogOverlay = forwardRef<
	ElementRef<typeof DialogPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={clsx(
			"fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className,
		)}
		{...props}
	/>
));

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogContent = forwardRef<
	ElementRef<typeof DialogPrimitive.Content>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
					className={clsx(
						"fixed left-1/2 top-1/2 z-50 w-[min(92vw,1100px)] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-white/15 bg-white/90 p-10 shadow-2xl backdrop-blur-2xl duration-200 dark:border-slate-700/60 dark:bg-slate-900/85",
				"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95",
				className,
			)}
			{...props}
		>
					<DialogPrimitive.Close
						className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white/50 text-slate-700 transition hover:rotate-90 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-slate-600/40 dark:bg-slate-800/60 dark:text-slate-200"
						aria-label="Close"
						data-cursor="focus"
					>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.6"
					className="h-4 w-4"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
				</svg>
					</DialogPrimitive.Close>
			{children}
		</DialogPrimitive.Content>
	</DialogPortal>
));

DialogContent.displayName = DialogPrimitive.Content.displayName;
