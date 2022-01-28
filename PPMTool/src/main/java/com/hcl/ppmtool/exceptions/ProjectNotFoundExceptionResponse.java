package com.hcl.ppmtool.exceptions;

import com.hcl.ppmtool.domain.Project;

public class ProjectNotFoundExceptionResponse {
    private String ProjectNotFound;

    public ProjectNotFoundExceptionResponse(String projectNotFound){
        ProjectNotFound = projectNotFound;
    }
}
