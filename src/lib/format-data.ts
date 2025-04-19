import { PartialStatementDTO } from '@/services/types/partial-statement-dto';
import { StatementDTO } from '@/services/types/statement-dto';
import { DocumentDTOWithProject } from '@/app/admin/page';

export function formatStatementData(
  statement: DocumentDTOWithProject,
): PartialStatementDTO {
  return {
    fileName: statement.fileName,
    period: statement.period,
    bankingInstitution: statement.bankingInstitution,
    accountName: statement.accountName,
    uploadDate: statement.uploadDate,
    uploader: statement.uploader,
    status: statement.status,
  };
}

interface FinancialData {
  openingBalance: number;
  closingBalance: number;
}
export function formatFinancialData(
  statement: DocumentDTOWithProject,
): FinancialData {
  return {
    openingBalance: Number(statement.openingBalance),
    closingBalance: Number(statement.closingBalance),
  };
}

export interface StatementDisplay {
  field: string;
  value: string;
  type: 'text' | 'number' | 'date';
  editable: boolean;
}
export const editDisplayFormat = (
  statement: PartialStatementDTO,
): StatementDisplay[] => {
  let data = Object.entries(statement).map(([key, value]) => {
    let type: 'text' | 'number' | 'date' = 'text';
    let editable = true;

    switch (key) {
      case 'openingBalance':
      case 'closingBalance':
        type = 'number';
        break;
      case 'uploadDate':
        let formattedDate;
        try {
          formattedDate =
            value instanceof Date
              ? value.toISOString().split('T')[0]
              : new Date(value).toISOString().split('T')[0];
          type = 'date';
          editable = false;
        } catch (e) {
          // If date parsing fails, keep the original value
          formattedDate = '';
          type = 'text';
          editable = false;
        }
        break;
      case 'status':
      case 'uploader':
        editable = false;
        break;
      case 'period':
        if (value) {
          key = 'ending period';
          try {
            value =
              value instanceof Date
                ? value.toISOString().split('T')[0]
                : new Date(value).toISOString().split('T')[0];
            type = 'date';
            editable = true;
          } catch (e) {
            // If date parsing fails, keep the original value
            value = '';
            type = 'text';
            editable = false;
          }
        }
        break;
      default:
        type = 'text';
    }

    return {
      field: key,
      value: String(value),
      type,
      editable,
    };
  }) as StatementDisplay[];

  return data;
};
