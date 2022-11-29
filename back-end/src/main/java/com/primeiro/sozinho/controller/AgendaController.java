package com.primeiro.sozinho.controller;


import com.primeiro.sozinho.model.Contato;
import com.primeiro.sozinho.service.AgendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agenda")
public class AgendaController {

    @Autowired
    AgendaService service;

    @GetMapping
    public ResponseEntity<List<Contato>> findAll() {
        List<Contato> contatoList = service.findAll();
        return ResponseEntity.ok(contatoList);
    }

    @GetMapping("/{nome}")
    public ResponseEntity<Contato> findByNome(@PathVariable String nome) {
        Contato contato = service.findByNome(nome);
        return ResponseEntity.ok(contato);
    }

    @PostMapping("/addContato")
    public void cadastrarContato(@RequestBody Contato contato) {
        service.cadastrarContato(contato);
    }

    @DeleteMapping("/delete/{nome}")
    public void delete(@PathVariable String nome) { service.delete(nome);}


}
