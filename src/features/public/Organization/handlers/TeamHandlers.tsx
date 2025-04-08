import { http, HttpResponse } from 'msw';
import { employeeTeamMockData, teamMockData } from '../data/TeamMockList';
import { TeamDTO, CreateTeamDTO, UpdateTeamDTO } from '../DTOs/TeamDTO';
import { v4 as uuid } from 'uuid';

const employeeTeams = [...employeeTeamMockData];
const teams = [...teamMockData];

export const teamHandlers = [
  // 🟢 GET all teams
  http.get<never, null, TeamDTO[]>('/api/teams', () => {
    const enriched = teams.map((team) => {
      const related = employeeTeams.filter((e) => e.teamId === team.id);
      return {
        ...team,
        employeeIds: related.map((r) => r.employeeId),
        employees: related,
      };
    });

    return HttpResponse.json(enriched, { status: 200 });
  }),

  // 🔵 GET team by ID
  http.get<{ id: string }, null, TeamDTO | { message: string }>('/api/teams/:id', ({ params }) => {
    const team = teams.find((t) => t.id === params.id);
    if (!team) {
      return HttpResponse.json({ message: 'Team not found' }, { status: 404 });
    }

    const related = employeeTeams.filter((e) => e.teamId === team.id);

    return HttpResponse.json(
      {
        ...team,
        employeeIds: related.map((r) => r.employeeId),
        employees: related,
      },
      { status: 200 }
    );
  }),

  // 🟡 CREATE team
  http.post<never, CreateTeamDTO, TeamDTO>('/api/teams', async ({ request }) => {
    const body = await request.json();
    const generatedTeamId = uuid();
    const generatedTeamEmployeeId = uuid();

    const newTeam: TeamDTO = {
      id: generatedTeamId,
      name: body.name,
      mainId: body.mainId,
      unitId: body.unitId,
      status: body.status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      employeeIds: body.employeeIds || [],
    };

    teams.push(newTeam);

    if (body.employeeIds) {
      body.employeeIds.forEach((empId) => {
        employeeTeams.push({
          id: generatedTeamEmployeeId,
          employeeId: empId,
          teamId: generatedTeamId,
          createdAt: new Date().toISOString(),
        });
      });
    }

    return HttpResponse.json(newTeam, { status: 201 });
  }),

  // 🟠 UPDATE team
  http.put<{ id: string }, UpdateTeamDTO, TeamDTO | { message: string }>(
    '/api/teams/:id',
    async ({ params, request }) => {
      const team = teams.find((t) => t.id === params.id);
      if (!team) {
        return HttpResponse.json({ message: 'Team not found' }, { status: 404 });
      }

      const body = await request.json();

      if (body.name !== undefined) team.name = body.name;
      if (body.mainId !== undefined) team.mainId = body.mainId;
      if (body.managerId !== undefined) team.managerId = body.managerId;
      team.updatedAt = new Date().toISOString();

      if (body.employeeIds !== undefined) {
        const toRemove = employeeTeams.filter((e) => e.teamId === team.id);
        toRemove.forEach((entry) => {
          const i = employeeTeams.indexOf(entry);
          if (i !== -1) employeeTeams.splice(i, 1);
        });

        body.employeeIds.forEach((empId) => {
          employeeTeams.push({
            id: uuid(),
            employeeId: empId,
            teamId: team.id ?? uuid(),
            createdAt: new Date().toISOString(),
          });
        });
      }

      const related = employeeTeams.filter((e) => e.teamId === team.id);

      return HttpResponse.json(
        {
          ...team,
          employeeIds: related.map((r) => r.employeeId),
          employees: related,
        },
        { status: 200 }
      );
    }
  ),

  // 🔴 DELETE team
  http.delete<{ id: string }, null, { message: string }>('/api/teams/:id', ({ params }) => {
    const index = teams.findIndex((t) => t.id === params.id);
    if (index === -1) {
      return HttpResponse.json({ message: 'Team not found' }, { status: 404 });
    }

    // Clean up join data
    for (let i = employeeTeams.length - 1; i >= 0; i--) {
      if (employeeTeams[i].teamId === params.id) {
        employeeTeams.splice(i, 1);
      }
    }

    teams.splice(index, 1);
    return HttpResponse.json({ message: 'Team deleted' }, { status: 200 });
  }),
];
