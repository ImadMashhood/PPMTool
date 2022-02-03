package com.hcl.ppmtool.repositories;

import com.hcl.ppmtool.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

     //This method will find projects by ID
     Project findByProjectIdentifier(String projectId);

     //This overides the current findAll method
     @Override
     Iterable<Project> findAll();
     
     Iterable<Project> findAllByProjectLeader(String username);
}
