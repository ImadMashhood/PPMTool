package com.hcl.ppmtool.repositories;

import com.hcl.ppmtool.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

     Project findByProjectIdentifier(String projectId);

     @Override
     Iterable<Project> findAll();
}
