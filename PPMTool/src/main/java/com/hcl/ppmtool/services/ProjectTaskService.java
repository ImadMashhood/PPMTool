package com.hcl.ppmtool.services;

import com.hcl.ppmtool.domain.Backlog;
import com.hcl.ppmtool.domain.Project;
import com.hcl.ppmtool.domain.ProjectTask;
import com.hcl.ppmtool.exceptions.ProjectNotFoundException;
import com.hcl.ppmtool.repositories.BacklogRepository;
import com.hcl.ppmtool.repositories.ProjectRepository;
import com.hcl.ppmtool.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask){
        try{
            Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
            projectTask.setBacklog((backlog));
            Integer BacklogSequence = backlog.getPTSequence();
            BacklogSequence++;
            backlog.setPTSequence(BacklogSequence);
            projectTask.setProjectSequence(projectIdentifier+"-"+BacklogSequence);
            projectTask.setProjectIdentifier(projectIdentifier);
            if(projectTask.getPriority()==null){//TODO Handle form with 0 check
                projectTask.setPriority(3);
            }
            if(projectTask.getStatus()==""||projectTask.getStatus()==null){
                projectTask.setStatus("TO_DO");
            }
            return projectTaskRepository.save(projectTask);
        }catch (Exception e){
            throw new ProjectNotFoundException("Project Not Found");
        }



    }

    public Iterable<ProjectTask>findBacklogById(String id) {
        Project project = projectRepository.findByProjectIdentifier(id);
        if (project == null){
            throw new ProjectNotFoundException("Project '"+id+"' does not exist");
        }

        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }
}
