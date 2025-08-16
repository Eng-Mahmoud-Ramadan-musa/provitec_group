import React from 'react'
import { Loader2, X } from 'lucide-react'
import { Dialog, DialogClose, DialogContent, DialogTitle } from './dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

interface PageLoadingDialogProps {
  open: boolean
  showCloseButton: boolean
}

export default function PageLoadingDialog({ open , showCloseButton}: PageLoadingDialogProps) {
  return (
    <Dialog open={open}>
      <DialogContent showCloseButton={false} className="flex items-center justify-center ">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </DialogContent>
    </Dialog>
  )
}
