package com.hcl.ppmtool.repositories;

import com.hcl.ppmtool.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
    @Override
    default Iterable<Project> findAllById(Iterable<Long> longs) {
        return null;
    }
}
