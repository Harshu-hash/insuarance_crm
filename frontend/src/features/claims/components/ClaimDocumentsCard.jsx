import React from 'react';
import { Card } from '../../../components/ui/Card';
import { FileText, CheckCircle2, AlertCircle, Eye, Download, Clock } from 'lucide-react';
import Badge from '../../../components/ui/Badge';

const ClaimDocumentsCard = ({ documents }) => {
  return (
    <Card 
      title="Document Checklist" 
      icon={<FileText className="h-5 w-5 text-blue-600" />}
    >
      <div className="space-y-3">
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
          >
            <div className="flex items-center space-x-3 min-w-0">
              <div className={`h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                doc.status === 'verified' ? 'bg-emerald-50 text-emerald-500' : 'bg-slate-50 text-slate-400'
              }`}>
                <FileText className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">{doc.name}</p>
                <div className="flex items-center mt-0.5 text-[9px] font-bold text-slate-400 uppercase">
                  <Clock className="h-2.5 w-2.5 mr-1" />
                  {doc.uploadDate}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant={doc.status === 'verified' ? 'success' : 'neutral'} size="sm">
                {doc.status}
              </Badge>
              <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:text-primary transition-colors">
                  <Eye className="h-3.5 w-3.5" />
                </button>
                <button className="p-1 hover:text-primary transition-colors">
                  <Download className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {documents.length === 0 && (
          <div className="text-center py-6">
            <AlertCircle className="h-8 w-8 text-slate-200 mx-auto mb-2" />
            <p className="text-xs text-slate-400 italic">No documents uploaded yet.</p>
          </div>
        )}

        <button className="w-full mt-2 p-2 border-2 border-dashed border-slate-100 rounded-xl text-[10px] font-bold text-slate-400 uppercase hover:border-primary hover:text-primary transition-all">
          Upload Additional Document
        </button>
      </div>
    </Card>
  );
};

export default ClaimDocumentsCard;
