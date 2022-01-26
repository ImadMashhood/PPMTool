package com.hcl.ppmtool.services;

import com.hcl.ppmtool.domain.Backlog;
import com.hcl.ppmtool.domain.Project;
import com.hcl.ppmtool.exceptions.ProjectIdException;
import com.hcl.ppmtool.repositories.BacklogRepository;
import com.hcl.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private BacklogRepository backlogRepository;

    //Used for creating projects
    public Project saveOrUpdate(Project project){
        try{
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase(Locale.ROOT));
            if(project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog((backlog));
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier().toUpperCase(Locale.ROOT));
            }
            else if(project.getId()!=null){
                project.setBacklog(backlogRepository.findByProjectIdentifier(project.getProjectIdentifier().toUpperCase(Locale.ROOT)));
            }
            return projectRepository.save(project);
        }
        catch (Exception e){
            throw new ProjectIdException("Project ID '"+project.getProjectIdentifier().toUpperCase(Locale.ROOT)+"' already exists");
        }
    }

    //Used for finding projects by ID
    public Project findProjectByIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if(project == null){
            throw new ProjectIdException("Project ID does not exists");
        }
        return project;
    }

    //Used for finding all projects
    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }

    //Used to delete objects
    public void deleteProjectByIdentifier(String projectId){
        Project project = findProjectByIdentifier(projectId.toUpperCase(Locale.ROOT));
        if(project == null){
            throw new ProjectIdException("Can't delete Project ID does not exists");
        }
        projectRepository.delete(project);
    }
}
