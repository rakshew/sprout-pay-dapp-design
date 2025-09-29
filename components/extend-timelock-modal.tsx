"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Clock } from "lucide-react"
import { format, addDays } from "date-fns"

interface ExtendTimelockModalProps {
  isOpen: boolean
  onClose: () => void
  currentExpiryDate: Date
  onExtend: (newDate: Date) => void
  title?: string
}

export function ExtendTimelockModal({
  isOpen,
  onClose,
  currentExpiryDate,
  onExtend,
  title = "Extend Timelock",
}: ExtendTimelockModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(addDays(currentExpiryDate, 7))
  const [isExtending, setIsExtending] = useState(false)

  const handleExtend = async () => {
    setIsExtending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    onExtend(selectedDate)
    setIsExtending(false)
    onClose()
  }

  const minDate = addDays(currentExpiryDate, 1) // Must be at least 1 day after current expiry
  const maxDate = addDays(new Date(), 365) // Max 1 year from now

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-500" />
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Current Expiry Date</Label>
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{format(currentExpiryDate, "PPP")}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">New Expiry Date</Label>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              disabled={(date) => date < minDate || date > maxDate}
              className="rounded-md border"
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              <strong>Extension:</strong> {format(selectedDate, "PPP")}
              <span className="text-blue-600 ml-1">
                (+{Math.ceil((selectedDate.getTime() - currentExpiryDate.getTime()) / (1000 * 60 * 60 * 24))} days)
              </span>
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent" disabled={isExtending}>
              Cancel
            </Button>
            <Button onClick={handleExtend} className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={isExtending}>
              {isExtending ? "Extending..." : "Extend Timelock"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
