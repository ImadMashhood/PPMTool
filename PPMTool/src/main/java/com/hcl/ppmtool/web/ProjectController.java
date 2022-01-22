package com.hcl.ppmtool.web;

import com.hcl.ppmtool.domain.Project;
import com.hcl.ppmtool.services.MapValidationErrorService;
import com.hcl.ppmtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/project")
@CrossOrigin
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    //Post mapping for project creation and updating
    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!=null) return errorMap;
        Project project1 = projectService.saveOrUpdate(project);
        return new ResponseEntity<Project>(project1, HttpStatus.CREATED);
    }

    //Get mapping for finding a project ID and returning a project
    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId){
        Project project = projectService.findProjectByIdentifier(projectId);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    //Get mapping for finding all projects and returning them
    @GetMapping("/all")
    public Iterable<Project> getAllProjects(){return projectService.findAllProjects();}

    //Delete mapping for finding a project by ID and deleting it, then returning a delete message
    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId){
        projectService.deleteProjectByIdentifier(projectId);
        return new ResponseEntity<String>("Project '"+projectId+"' was succesfully deleted", HttpStatus.OK);
    }
}
