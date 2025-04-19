'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProjectDTO } from '@/services/types/project-dto';
import { ProjectApi } from '@/services/services/project-api';
import { TaxDocumentDTO } from '@/services/types/tax-document-dto';
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import DocumentUpload from '@/components/layouts/client/document-upload';
import TaxPreparationForm from '@/components/layouts/client/tax-preparation-form';

export interface TaxDocumentDTOWithProject extends TaxDocumentDTO {
  projectName: string;
}

const ClientPage = () => {
  const [project, setProject] = useState<ProjectDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [documentsWithProjectNames, setDocumentsWithProjectNames] = useState<
    TaxDocumentDTOWithProject[]
  >([]);
  const params = useParams();
  const slug = params.slug;
  const projectApi = new ProjectApi();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const project = await projectApi.getPopulatedProjectById(
          slug as string,
        );
        setProject(project.data);
        console.log('project is: ', project.data);
        setDocumentsWithProjectNames(project.data.documents);
      } catch (error) {
        setError(error as string);
      }
    };
    fetchProject();
  }, [slug]);

  return (
    <div className="flex justify-center items-center">
      {project && <TaxPreparationForm project={project} />}
    </div>
  );
};

export default ClientPage;
