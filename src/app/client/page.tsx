'use client';

import { useEffect, useState } from 'react';
import { useClientAuth } from './context/client-auth-context';
import { ProjectApi } from '@/services/services/project-api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getColumns } from '@/components/project-catalog/columns';
import { ColumnDef } from '@tanstack/react-table';
import { ProjectSettingsDataTable } from '@/components/project-catalog/data-table';
import { TaxProjectDTO } from '@/services/types/tax-project-dto';
import { ProjectType } from '@/services/types/project-type';

const ClientPage = () => {
  const { clientEmail } = useClientAuth();
  const projectApi = new ProjectApi();
  const [projects, setProjects] = useState<TaxProjectDTO[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await projectApi.getAllProjectsByClient();
      setProjects(projects.data);
    };
    fetchProjects();
  }, [clientEmail]);

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Card className="w-[90%] h-[90%]">
        <CardHeader>
          <CardTitle>Client Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <ProjectSettingsDataTable
            userType="client"
            type={ProjectType.Other}
            projects={projects as TaxProjectDTO[]}
            setProjects={setProjects}
            organizationUsers={[]}
            organizationName={''}
            handleDeleteProjects={() => {}}
            columns={getColumns([]) as ColumnDef<TaxProjectDTO>[]}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientPage;
