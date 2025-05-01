import React from 'react'
import { Dialog, DialogContent } from './ui/dialog';

export default function IntroVideo({open,setOpen}) {
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[90vw] w-full">
          <div className="aspect-w-16 aspect-video w-full">
            {/* <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/_oYLXN0K7i4?autoplay=1&controls=0&rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            /> */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube-nocookie.com/embed/ZG3rkJgvwVM?si=bU9QZf5gEKjeeJyA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
