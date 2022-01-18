package com.hcl.ppmtool.services;

import com.hcl.ppmtool.domain.Project;
import com.hcl.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdate(Project project){

        //TODO Logic Underpressure

        return projectRepository.save(project);
    }
}
