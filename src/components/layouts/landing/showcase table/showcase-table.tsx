// showcase-table.tsx
import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  BellIcon,
  Bot,
  CrosshairIcon,
  Currency,
  DollarSign,
  FileIcon,
  Files,
  FilesIcon,
  FileSpreadsheet,
  FolderIcon,
  GlassesIcon,
  Import,
  LineChart,
  LucideGitCompareArrows,
  PlusIcon,
} from 'lucide-react';

function playVideoImmediately(videoElement: HTMLVideoElement) {
  if (!videoElement) {
    console.error('Video element is not defined');
    return;
  }

  // Play the video immediately
  videoElement.play().catch((error) => {
    console.error('Error playing video:', error);
  });
}

export function ShowcaseTable({ className }: { className: string }) {
  return (
    <div className={cn('', className)}>
      <Tabs defaultValue="tab1" className="w-full">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col space-y-2 bg-transparent px-2">
            <TabsList className="flex flex-row sm:flex-col bg-transparent mt-20">
              {/* <h1 className="text-md font-bold mb-8 flex items-center text-secondary-foreground mx-auto">
              <FileIcon className="w-8 h-8 mr-2" />
              <span className="w-40">
                Document Ingestion
              </span>
            </h1> */}

              <TabsTrigger
                value="tab1"
                className="px-4 py-2 text-left !justify-start data-[state=active]:border-2 data-[state=active]:border-primary"
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                Collector
              </TabsTrigger>

              <TabsTrigger
                value="tab2"
                className="p py-2 text-left !justify-start data-[state=active]:border-2 data-[state=active]:border-primary"
              >
                <CrosshairIcon className="w-4 h-4 mr-2" />
                Analyzer
              </TabsTrigger>

              {/* <h1 className="text-md font-bold mb-8 flex items-center text-secondary-foreground mx-auto mt-4">
              <DollarSign className="w-8 h-8 mr-2" />
              <span className="w-40">
                Transactions Management
              </span>
            </h1> */}
              {/* 
              <TabsTrigger
                value="tab3"
                className="px-4 py-2 text-left !justify-start data-[state=active]:border-2 data-[state=active]:border-primary"
              >
                <LucideGitCompareArrows className="w-4 h-4 mr-2" />
                Reconciliation
              </TabsTrigger> */}
            </TabsList>
          </div>

          <div className="flex-grow w-full">
            <TabsContent value="tab1">
              <div className="aspect-video rounded-lg w-full mx-auto overflow-hidden flex justify-center items-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    const iframe = document.getElementById('fallback-iframe');
                    if (iframe) iframe.style.display = 'block';
                  }}
                  width="90%"
                  ref={(video) => {
                    if (video) playVideoImmediately(video);
                  }}
                >
                  <source src="/Docufier Gif2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-col w-[90%] mx-auto">
                <ul className="list-disc pl-5 space-y-2 pt-12">
                  <li className="flex flex-col">
                    <span className="flex items-center">
                      <GlassesIcon className="w-4 h-4 mr-2" />
                      <b>Smart Document Requests</b>
                    </span>
                    <span className="w-full">
                      Automatically request missing documents from clients.
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="flex items-center">
                      <FolderIcon className="w-4 h-4 mr-2" />
                      <b>AI Classification & Verification</b>
                    </span>
                    <span className="w-full">
                      Classify every document to the correct type, verify the
                      document is correct.
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="flex items-center">
                      <BellIcon className="w-4 h-4 mr-2" />
                      <b>Email & SMS Reminders </b>
                    </span>
                    <span className="w-full">
                      Ensure documents arrive on time, send reminders to
                      clients.
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="aspect-video rounded-lg w-full mx-auto overflow-hidden flex justify-center items-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    const iframe = document.getElementById('fallback-iframe');
                    if (iframe) iframe.style.display = 'block';
                  }}
                  width="90%"
                  ref={(video) => {
                    if (video) playVideoImmediately(video);
                  }}
                >
                  <source src="/analyzer demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-col mx-auto">
                <ul className="list-disc pl-5 space-y-2 pt-12">
                  <li className="flex flex-col">
                    <span className="flex items-center">
                      <LineChart className="w-4 h-4 mr-2" />{' '}
                      <b>Analysis & Reconciliation</b>
                    </span>
                    <span className="w-full">
                      Convert any financial statement and review every
                      transaction using a simple interface
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="flex items-center">
                      <Bot className="w-4 h-4 mr-2" />
                      <b>AI Tax Categorization</b>
                    </span>
                    <span className="w-full">
                      Let our AI bookkeeper choose the correct tax category for
                      every transaction
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="flex items-center">
                      <FileSpreadsheet className="w-4 h-4 mr-2" />
                      <b>Excel Preparation</b>
                    </span>
                    <span className="w-full">
                      Export the verified statement into an excel spreadsheet
                      with a single click
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            {/* <TabsContent value="tab3">
              <div className="aspect-video rounded-lg w-full mx-auto overflow-hidden flex justify-center items-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    const iframe = document.getElementById('fallback-iframe');
                    if (iframe) iframe.style.display = 'block';
                  }}
                  width="90%"
                  ref={(video) => {
                    if (video) playVideoImmediately(video);
                  }}
                >
                  <source src="/reconciliation_demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-col w-[90%] mx-auto">
                <ul className="list-disc pl-5 space-y-2 pt-12">
                  <li className="flex flex-col">
                    <span className="flex items-center">
                      <Currency className="w-4 h-4 mr-2" />{' '}
                      <b>Analysis & Reconciliation</b>
                    </span>
                    <span className="w-full">
                      Verify every transaction and reconcile your books.
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="flex items-center">
                      <Files className="w-4 h-4 mr-2" />{' '}
                      <b>Excel Preparation</b>
                    </span>
                    <span className="w-full">
                      Import documents from any source
                    </span>
                  </li>
                  <li className="flex flex-col">
                    <span className="flex items-center">
                      <Import className="w-4 h-4 mr-2" /> <b>Export</b>
                    </span>
                    <span className="w-full">
                      Export your books to any accounting software.
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent> */}
          </div>
        </div>
      </Tabs>
    </div>
  );
}
