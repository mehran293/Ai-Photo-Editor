"use client";

import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export function UpgradeModal({ isOpen, onClose, restrictedTool, reason }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-800 border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            Feature Available
          </DialogTitle>
        </DialogHeader>
        <div className="text-white/70 text-sm">
          This feature is available for all users.
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose} className="text-white/70 hover:text-white">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}