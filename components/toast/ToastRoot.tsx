"use client";
import * as Toast from "@radix-ui/react-toast";
import { useEffect } from "react";
import { useToast, useToastActions, useToastContents } from "~/store/toastStore";
import { toastClasses } from "./toastClasses";


const ToastRoot = () => {
    const isToastOpen = useToast()
    const toast = useToastContents();
    const { stopToast } = useToastActions();

    useEffect(() => {
        let timer: any;
        if (isToastOpen) {
            timer = setTimeout(() => {
                stopToast();
            }, 3000);
        }

        return () => clearTimeout(timer);
    }, [isToastOpen, stopToast]);
    return (
        <Toast.Provider swipeDirection="right">
            <Toast.Root
                open={isToastOpen}
                className={`${toastClasses.base} ${toastClasses.shape} ${toastClasses.animation} ${toastClasses.color[toast.color]}`}
            >
                <div className="flex flex-col gap-y-2">
                    <Toast.Title className="text-lg font-semibold">
                        {toast.title}
                    </Toast.Title>
                    <Toast.Description className="text-base">
                        {toast.description}
                    </Toast.Description>
                </div>
            </Toast.Root>


            <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
        </Toast.Provider>
    );
};

export default ToastRoot;
