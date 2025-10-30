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
			"fixed inset-0 z-50 bg-[rgba(18,24,36,0.55)] backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
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
				"fixed left-1/2 top-1/2 z-50 w-[min(94vw,1100px)] max-h-[92vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[32px] border border-[rgba(255,255,255,0.4)] bg-white/95 p-8 shadow-[0_40px_80px_rgba(12,18,32,0.45)] backdrop-blur-2xl duration-200 md:p-10",
				"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95",
				className,
			)}
			{...props}
		>
			<DialogPrimitive.Close
				className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(36,48,71,0.14)] bg-white/80 text-[rgba(36,48,71,0.7)] transition hover:rotate-90 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
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
